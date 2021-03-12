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
    Order,
    OrderStatusEnum,
} from './Order';



export const OrderRecordProps = {
    recType: "OrderApiRecord" as "OrderApiRecord",
    id: null as string | null,
    petId: null as number | null,
    quantity: null as number | null,
    shipDate: null as Date | null,
    status: null as OrderStatusEnum | null,
    complete: null as boolean | null,
};

export type OrderRecordPropsType = typeof OrderRecordProps;
export const OrderRecord = Record(OrderRecordProps, OrderRecordProps.recType);
export type OrderRecord = RecordOf<OrderRecordPropsType>;

knownRecordFactories.set(OrderRecordProps.recType, OrderRecord);

export const OrderRecordEntityProps = {
    ...OrderRecordProps,
    recType: "OrderApiRecordEntity" as "OrderApiRecordEntity",
};

export type OrderRecordEntityPropsType = typeof OrderRecordEntityProps;
export const OrderRecordEntity = Record(OrderRecordEntityProps, OrderRecordEntityProps.recType);
export type OrderRecordEntity = RecordOf<OrderRecordEntityPropsType>;

knownRecordFactories.set(OrderRecordEntityProps.recType, OrderRecordEntity);

class OrderRecordUtils extends ApiRecordUtils<Order, OrderRecord> {
    public normalize(apiObject: Order, asEntity?: boolean): Order {
        (apiObject as any).recType = asEntity ? OrderRecordEntityProps.recType : OrderRecordProps.recType;
        if (apiObject.id) { (apiObject as any).id = apiObject.id.toString(); } 
        return apiObject;
    }

    public getSchema(): Schema {
        return new schema.Entity("order", {
        });
    }

    public *toInlined(entityId?: string) {
        if (!entityId) {return undefined; }
        const entity = yield select(apiEntityOrderSelector, {id: entityId});
        if (!entity) {return undefined; }

        const {
            recType,
		    ...unchangedProperties
		} = entity;

        const entityProperties = {
        }

        return OrderRecord({
            ...unchangedProperties,
            ...entityProperties
        });
    }

    public *toInlinedArray(entityIds: List<string>) {
        let entities = List<OrderRecord>();
        for (let entityIndex = 0; entityIndex < entityIds.count(); entityIndex++) {
            const entity = yield call(this.toInlined, entityIds.get(entityIndex));
            if (entity) {
                entities.push(entity);
            }
        }
        return entities;
    }

    public toApi(record: OrderRecord): Order {
        const apiObject = super.toApi(record);
        if (record.id) { apiObject.id = parseFloat(record.id); } 
        return apiObject;
    }
}

export const orderRecordUtils = new OrderRecordUtils();

export const apiEntitiesOrderSelector = (state: any) => getApiEntitiesState(state).order as Map<string, OrderRecordEntity>;
export const apiEntityOrderSelector = (state: any, {id}: {id?: string}) => id && apiEntitiesOrderSelector(state).get(id);

