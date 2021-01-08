import { Food } from "./Food";
import { Menu } from "./Menu";
import { Place } from "./place/Place";
import { User } from "./User";
import { Submenu } from "./Submenu";
import { SubmenuItem } from "./SubmenuItem";

export enum OrderStatus {
	HAMPER = "HAMPER",

	WAITINGPAIEMENT = "WAITINGPAIEMENT",
	WAITING_3D_SECURE = "WAITING_3D_SECURE",
	FAILEDPAIEMENT = "FAILEDPAIEMENT",
	
	ORDERED = "ORDERED",
	REFUSED = "REFUSED",
	COOKING = "COOKING",
	READY = "READY",
	COLLECT = "COLLECT",
};

export enum OrderSource {
	MARKET_PLACE_MOBILE = "MARKET_PLACE_MOBILE", /** Order done on market place */
	WEB_WHITE_MARKING = "WEB_WHITE_MARKING", /** Order done on web page */
	BY_PLACE_BACKOFFICE = "BY_PLACE_BACKOFFICE", /** Order given by place */
};

export interface ICreateOrderSubmenuInput {
	idSubmenu		:	number;
	idFoods?			:	Array<number> | null;
	idSubmenuItems?	:	Array<number> | null;
}

export interface ICreateOrderMenuInput {
	idMenu	:	number;
	submenues:	Array<ICreateOrderSubmenuInput>;

	comment?		:	string;	
}

export interface ICreateOrderInput {
	idPlace	:	number;

	date	:	Date;

	idFoods?	:	Array<number>;

	menues?	:	Array<ICreateOrderMenuInput>;

	phone?	:	string;

	stripeToken	:	string;

	comment?	:	string;

	source			: 	OrderSource; /** From where the order is comming */

	metadata?		:	object | undefined; /** Metadata to stock informations. Metadata can be any type. You just need to wrap in a string JSON.stringify()*/
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

	comment?		:	string;	

	menu	:	Menu;

	submenues	:	Array<IOrderSubmenu>;
}


export interface IOrder {

	_id				:	number;

	idUser			:	number;
	user?			:	User;

	price			:	number;
	fee				:	number;

	status			:	OrderStatus;
	source			: 	OrderSource; /** From where the order is comming */
	metadata?		:	object | undefined; /** Metadata to stock informations */

	idPlace			:	number;
	place?			:	Place;

	idFoods			:	Array<number>;
	foods?			:	Array<Food>;

	menues			:	Array<IOrderMenu>;

	date			:	Date;
	orderReference	:	String;

	phone?			:	string;
	comment?		:	string;
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