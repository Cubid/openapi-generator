package org.openapitools.codegen.typescript.axios;

import org.openapitools.codegen.CodegenConstants;
import org.openapitools.codegen.languages.TypeScriptAxiosClientCodegen;
import org.testng.annotations.Test;

import static org.testng.Assert.assertEquals;

public class TypeScriptAxiosClientCodegenTest {

    TypeScriptAxiosClientCodegen codegen = new TypeScriptAxiosClientCodegen();

    @Test
    public void testToEnumVarNameOriginalNamingType() {
        codegen.additionalProperties().put(CodegenConstants.ENUM_PROPERTY_NAMING, CodegenConstants.ENUM_PROPERTY_NAMING_TYPE.original.name());
        codegen.processOpts();
        assertEquals(codegen.toEnumVarName("SCIENCE", "string", false), "SCIENCE");
        assertEquals(codegen.toEnumVarName("SCIENCE_FICTION", "string", false), "SCIENCE_FICTION");
        assertEquals(codegen.toEnumVarName("science", "string", false), "science");
        assertEquals(codegen.toEnumVarName("science_fiction", "string", false), "science_fiction");
        assertEquals(codegen.toEnumVarName("scienceFiction", "string", false), "scienceFiction");
        assertEquals(codegen.toEnumVarName("ScienceFiction", "string", false), "ScienceFiction");
        assertEquals(codegen.toEnumVarName("A", "string", false), "A");
        assertEquals(codegen.toEnumVarName("b", "string", false), "b");
    }

    @Test
    public void testToEnumVarNameCamelCaseNamingType() {
        codegen.additionalProperties().put(CodegenConstants.ENUM_PROPERTY_NAMING, CodegenConstants.ENUM_PROPERTY_NAMING_TYPE.camelCase.name());
        codegen.processOpts();
        assertEquals(codegen.toEnumVarName("SCIENCE", "string", false), "science");
        assertEquals(codegen.toEnumVarName("SCIENCE_FICTION", "string", false), "scienceFiction");
        assertEquals(codegen.toEnumVarName("science", "string", false), "science");
        assertEquals(codegen.toEnumVarName("science_fiction", "string", false), "scienceFiction");
        assertEquals(codegen.toEnumVarName("scienceFiction", "string", false), "scienceFiction");
        assertEquals(codegen.toEnumVarName("ScienceFiction", "string", false), "scienceFiction");
    }

    @Test
    public void testToEnumVarNamePascalCaseNamingType() {
        codegen.additionalProperties().put(CodegenConstants.ENUM_PROPERTY_NAMING, CodegenConstants.ENUM_PROPERTY_NAMING_TYPE.PascalCase.name());
        codegen.processOpts();
        assertEquals(codegen.toEnumVarName("SCIENCE", "string", false), "Science");
        assertEquals(codegen.toEnumVarName("SCIENCE_FICTION", "string", false), "ScienceFiction");
        assertEquals(codegen.toEnumVarName("science", "string", false), "Science");
        assertEquals(codegen.toEnumVarName("science_fiction", "string", false), "ScienceFiction");
        assertEquals(codegen.toEnumVarName("scienceFiction", "string", false), "ScienceFiction");
        assertEquals(codegen.toEnumVarName("ScienceFiction", "string", false), "ScienceFiction");
        assertEquals(codegen.toEnumVarName("A", "string", false), "A");
        assertEquals(codegen.toEnumVarName("b", "string", false), "B");
    }

    @Test
    public void testToEnumVarNameSnakeCaseNamingType() {
        codegen.additionalProperties().put(CodegenConstants.ENUM_PROPERTY_NAMING, CodegenConstants.ENUM_PROPERTY_NAMING_TYPE.snake_case.name());
        codegen.processOpts();
        assertEquals(codegen.toEnumVarName("SCIENCE", "string", false), "science");
        assertEquals(codegen.toEnumVarName("SCIENCE_FICTION", "string", false), "science_fiction");
        assertEquals(codegen.toEnumVarName("science", "string", false), "science");
        assertEquals(codegen.toEnumVarName("science_fiction", "string", false), "science_fiction");
        assertEquals(codegen.toEnumVarName("scienceFiction", "string", false), "science_fiction");
        assertEquals(codegen.toEnumVarName("ScienceFiction", "string", false), "science_fiction");
        assertEquals(codegen.toEnumVarName("A", "string", false), "a");
        assertEquals(codegen.toEnumVarName("b", "string", false), "b");
    }

    @Test
    public void testToEnumVarNameUpperCaseNamingType() {
        codegen.additionalProperties().put(CodegenConstants.ENUM_PROPERTY_NAMING, CodegenConstants.ENUM_PROPERTY_NAMING_TYPE.UPPERCASE.name());
        codegen.processOpts();
        assertEquals(codegen.toEnumVarName("SCIENCE", "string", false), "SCIENCE");
        assertEquals(codegen.toEnumVarName("SCIENCE_FICTION", "string", false), "SCIENCE_FICTION");
        assertEquals(codegen.toEnumVarName("science", "string", false), "SCIENCE");
        assertEquals(codegen.toEnumVarName("science_fiction", "string", false), "SCIENCE_FICTION");
        assertEquals(codegen.toEnumVarName("scienceFiction", "string", false), "SCIENCE_FICTION");
        assertEquals(codegen.toEnumVarName("ScienceFiction", "string", false), "SCIENCE_FICTION");
        assertEquals(codegen.toEnumVarName("A", "string", false), "A");
        assertEquals(codegen.toEnumVarName("b", "string", false), "B");
    }

}
