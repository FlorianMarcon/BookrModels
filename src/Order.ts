import { Place } from "./Place";
import { Food } from "./Food";

export enum OrderStatus {
	ORDERED = "ORDERED",
	ACCEPTED = "ACCEPTED",
	REFUSED = "REFUSED",
	COOKING = "COOKING",
	READY = "READY",
};


/**
 *This class is used to create an order only.
 *OrderSubmenu is stocked directly in same collection than OrderMenu
 */
export interface OrderSubmenu {
	idSubmenu				:	string;

	idFoods?			:	string[];
}

/**
 *This class is used to create an order only.
 *Ordermenu is stocked directly in same collection than Order
 */
export interface OrderMenu {
	idMenu				:	string;

	submenues?		:	OrderSubmenu[];
}


export interface Order {

	_id				:	string;

	idUser			:	string;
	
	menues?			:	OrderMenu[];

	price			:	number;

	status			:	OrderStatus;

	place			:	Place;

	foods			:	Array<Food>;

}
