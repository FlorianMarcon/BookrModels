import { Food } from "./Food";
import { Menu } from "./Menu";
import { Place } from "./Place";
import { User } from "./User";
import { Submenu } from "./Submenu";
import { SubmenuItem } from "./SubmenuItem";

export enum OrderStatus {
	HAMPER = "HAMPER",

	WAITINGPAIEMENT = "WAITINGPAIEMENT",
	FAILEDPAIEMENT = "FAILEDPAIEMENT",
	
	ORDERED = "ORDERED",
	REFUSED = "REFUSED",
	COOKING = "COOKING",
	READY = "READY",
	COLLECT = "COLLECT",
};

export interface ICreateOrderSubmenuInput {
	idSubmenu		:	number;
	idFoods?			:	Array<number> | null;
	idSubmenuItems?	:	Array<number> | null;
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

	phone?	:	string;

	stripeToken	:	string;
}

export interface IOrderSubmenu {
	name:		string;

	idSubmenu:	number;
	submenu?:	Submenu;

	idFoods:	Array<number>;
	foods?:		Array<Food>;
	items?:		Array<SubmenuItem>;
}

export interface IOrderMenu {
	_id				:	number;

	name			:	string;

	description		:	string;

	price			:	number;

	imageUrl		:	string;

	place			:	Place;

	idMenu	:	number;

	menu	:	Menu;

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

	menues			:	Array<IOrderMenu>;

	date			:	Date;

	orderReference	:	String;

	phone?			:	string;

	customer?		:	User;
}

export interface QOrdersOptions {

	/**
	 *Take only order in this status
	 */
	status?:	OrderStatus

	/**
	 *Take only order if status is contained in array
	 */
	multipleStatus?:	Array<OrderStatus>;

	/**
	 * Min date to find
	 */
	minDate?:	Date;

	/**
	 * Max date to find
	 */
	maxDate?:	Date;
}


export interface IPaymentIntent {
	publishableKey:	String;
	clientSecret:	String;
}