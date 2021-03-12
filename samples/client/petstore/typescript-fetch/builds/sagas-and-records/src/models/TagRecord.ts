/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {ApiRecordUtils, knownRecordFactories} from "../runtimeSagasAndRecords";
import {getApiEntitiesState} from "../ApiEntitiesSelectors"
import {List, Record, RecordOf, Map} from 'immutable';
import {Schema, schema, NormalizedSchema} from "normalizr";
import {select, call} from "redux-saga/effects";

import {
    Tag,
} from './Tag';



export const TagRecordProps = {
    recType: "TagApiRecord" as "TagApiRecord",
    id: null as string | null,
    name: null as string | null,
};

export type TagRecordPropsType = typeof TagRecordProps;
export const TagRecord = Record(TagRecordProps, TagRecordProps.recType);
export type TagRecord = RecordOf<TagRecordPropsType>;

knownRecordFactories.set(TagRecordProps.recType, TagRecord);

export const TagRecordEntityProps = {
    ...TagRecordProps,
    recType: "TagApiRecordEntity" as "TagApiRecordEntity",
};

export type TagRecordEntityPropsType = typeof TagRecordEntityProps;
export const TagRecordEntity = Record(TagRecordEntityProps, TagRecordEntityProps.recType);
export type TagRecordEntity = RecordOf<TagRecordEntityPropsType>;

knownRecordFactories.set(TagRecordEntityProps.recType, TagRecordEntity);

class TagRecordUtils extends ApiRecordUtils<Tag, TagRecord> {
    public normalize(apiObject: Tag, asEntity?: boolean): Tag {
        (apiObject as any).recType = asEntity ? TagRecordEntityProps.recType : TagRecordProps.recType;
        if (apiObject.id) { (apiObject as any).id = apiObject.id.toString(); } 
        return apiObject;
    }

    public getSchema(): Schema {
        return new schema.Entity("tag", {
        });
    }

    public *toInlined(entityId?: string) {
        if (!entityId) {return undefined; }
        const entity = yield select(apiEntityTagSelector, {id: entityId});
        if (!entity) {return undefined; }

        const {
            recType,
		    ...unchangedProperties
		} = entity;

        const entityProperties = {
        }

        return TagRecord({
            ...unchangedProperties,
            ...entityProperties
        });
    }

    public *toInlinedArray(entityIds: List<string>) {
        let entities = List<TagRecord>();
        for (let entityIndex = 0; entityIndex < entityIds.count(); entityIndex++) {
            const entity = yield call(this.toInlined, entityIds.get(entityIndex));
            if (entity) {
                entities.push(entity);
            }
        }
        return entities;
    }

    public toApi(record: TagRecord): Tag {
        const apiObject = super.toApi(record);
        if (record.id) { apiObject.id = parseFloat(record.id); } 
        return apiObject;
    }
}

export const tagRecordUtils = new TagRecordUtils();

export const apiEntitiesTagSelector = (state: any) => getApiEntitiesState(state).tag as Map<string, TagRecordEntity>;
export const apiEntityTagSelector = (state: any, {id}: {id?: string}) => id && apiEntitiesTagSelector(state).get(id);

