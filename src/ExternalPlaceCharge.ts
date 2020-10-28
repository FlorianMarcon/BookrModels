import { Place } from "./Place";
import { User } from "./User";

/**
 * Interface representing ExternalPlaceCharge object
 * 
 * This object contain information to take charge by external account
 */
export interface ExternalPlaceCharge {

	/** ExternalPlaceCharge id */
	_id		:	number;
	
	/** Id of the place having charge */
	idPlace	:	number;

	/** Id of the destinary stripe account  */
	idDestinaryStripeAccount	:	number;

	/** Percentage fee */
	percentageFee				:	number;
	
	/** fixed fee */
	fixedFee					:	number;

	/** Deadline of the charge */
	deadline					:	Date;

	/**
	 * FIELD RESOLVERS
	 */

	/** User taking charge */
	destinary	:	User;

	/** Place having charge */
	place		:	Place;
}

export interface ICreateExternalPlaceChargeInput extends Partial<ExternalPlaceCharge> {
	
	/** Id of the place having charge */
	idPlace	:	number;

	/** Id of the destinary stripe account  */
	idDestinaryStripeAccount	:	number;

	/** Percentage fee */
	percentageFee?				:	number;
	
	/** fixed fee */
	fixedFee?					:	number;

	/** Deadline of the charge */
	deadline					:	Date;
}

export interface IUpdateExternalPlaceChargeInput extends Partial<ExternalPlaceCharge> {

	/** ExternalPlaceCharge id */
	_id		:	number;

	/** Id of the place having charge */
	idPlace?	:	number;

	/** Id of the destinary stripe account  */
	idDestinaryStripeAccount?	:	number;

	/** Percentage fee */
	percentageFee?				:	number;
	
	/** fixed fee */
	fixedFee?					:	number;

	/** Deadline of the charge */
	deadline?					:	Date;
}
