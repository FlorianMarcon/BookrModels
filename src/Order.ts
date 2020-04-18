import { Food } from "./Food";
import { Menu } from "./Menu";
import { Place } from "./Place";
import { User } from "./User";
import { Submenu } from "./Submenu";

export enum OrderStatus {
	ORDERED = "ORDERED",
	ACCEPTED = "ACCEPTED",
	REFUSED = "REFUSED",
	COOKING = "COOKING",
	READY = "READY",
};

export interface ICreateOrderSubmenuInput {
	idSubmenu:	number;
	idFoods:	Array<number>;
}

export interface ICreateOrderMenuInput {
	idMenu	:	number;
	submenues:	Array<ICreateOrderSubmenuInput>;
}

export interface ICreateOrderInput {
	idPlace	:	number;

	date	:	Date;

	idFoods?	:	Array<number>;

	menues?	:	Array<ICreateOrderMenuInput>;
}

export interface IOrderSubmenu {
	idSubmenu:	number;
	submenu?:	Submenu;

	idFoods:	Array<number>;
	foods?:		Array<Food>;
}

export interface IOrderMenu {
	idMenu	:	number;
	menu	:	Menu;

	price	:	 number;
	submenues	:	Array<IOrderSubmenu>;
}


export interface IOrder {

	_id				:	number;

	idUser			:	number;
	user?			:	User;

	price			:	number;

	status			:	OrderStatus;

	idPlace			:	number;
	place?			:	Place;

	idFoods			:	Array<number>;
	foods?			:	Array<Food>;

	date			:	Date;

	orderReference	:	String;
}

export interface QOrdersOptions {

	/**
	 *Take only order in this status
	 */
	status?:	OrderStatus;
}
