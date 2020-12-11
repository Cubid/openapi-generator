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

import {ApiRecordUtils, knownRecordFactories, appFromJS, NormalizedRecordEntities} from "../runtimeSagasAndRecords";
import {List, Record, RecordOf} from 'immutable';
import {Schema, schema, NormalizedSchema} from "normalizr";

import {
    GetProductTypeResponse,
} from './GetProductTypeResponse';

import {
    ProductType,
} from './ProductType';
import {
    ResponseMeta,
} from './ResponseMeta';

import {
    ResponseMetaRecord,
    responseMetaRecordUtils,
} from './ResponseMetaRecord';

export const GetProductTypeResponseRecordProps = {
	recType: "GetProductTypeResponseRecord" as "GetProductTypeResponseRecord",
    meta: ResponseMetaRecord(),
    data: null as ProductType | null,
};

export type GetProductTypeResponseRecordPropsType = typeof GetProductTypeResponseRecordProps;
export const GetProductTypeResponseRecord = Record(GetProductTypeResponseRecordProps, GetProductTypeResponseRecordProps.recType);
export type GetProductTypeResponseRecord = RecordOf<GetProductTypeResponseRecordPropsType>;

knownRecordFactories.set(GetProductTypeResponseRecordProps.recType, GetProductTypeResponseRecord);


class GetProductTypeResponseRecordUtils extends ApiRecordUtils<GetProductTypeResponse, GetProductTypeResponseRecord> {
	public normalize(apiObject: GetProductTypeResponse, asEntity?: boolean): GetProductTypeResponse {
		(apiObject as any).recType = "GetProductTypeResponseRecord";
        responseMetaRecordUtils.normalize(apiObject.meta);
		return apiObject;
	}

	public toApi(record: GetProductTypeResponseRecord): GetProductTypeResponse {
        const apiObject = super.toApi(record);
        apiObject.meta = responseMetaRecordUtils.toApi(record.meta);
        return apiObject;
    }

	public fromApiPassthrough(apiObject: GetProductTypeResponse): ProductType {
	    return apiObject.data!;
	}

	public fromApiPassthroughAsEntities(apiObject: GetProductTypeResponse): NormalizedRecordEntities {
	    console.log("entities revival not supported on this response");
		return {entities: {}, result: List<string>()};
	}
}

export const getProductTypeResponseRecordUtils = new GetProductTypeResponseRecordUtils();
