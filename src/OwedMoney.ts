import { User } from "./User";

/**
 * Interface representing OwedMoney object
 * 
 * This object contain information relative to owed money
 */
export interface OwedMoney {

	/** OwedMoney id */
	_id		:	number;
	
	/** Id of the destinary of the money */
	idDestinary	:	number;

	/** amount due */
	amount	:	number;

	/** Money is sended */
	isSent				:	boolean;
	
	/** Date when money was sended */
	sendedDate?			:	Date | null;

	/**
	 * FIELD RESOLVERS
	 */

	/** User taking charge */
	destinary	:	User;
}