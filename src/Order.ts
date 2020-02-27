import { Place } from "./Place";
import { Food } from "./Food";
import { Submenu } from "./Submenu";
import { Menu } from "./Menu";
import { User } from "./User";

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
	submenu			:	Submenu;

	idFoods			:	string[];
}

/**
 *This class is used to create an order only.
 *Ordermenu is stocked directly in same collection than Order
 */
export interface OrderMenu {
	menu			:	Menu;

	submenues		:	OrderSubmenu[];
}


export interface Order {

	_id				:	string;

	user			:	User;

	menues			:	OrderMenu[];

	price			:	number;

	status			:	OrderStatus;

	place			:	Place;

	foods			:	Array<Food>;

}
