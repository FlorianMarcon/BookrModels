import { Food } from "./Food";
import { Place } from "./Place";
import { Submenu } from "./Submenu";

/**
 * SubmenuItem object
 */
export interface SubmenuItem {

	/**
	 * Submenu Item Id
	 */
	_id				:	number;


	/**
	 * Place containing this item
	 */
	place			:	Place;

	/**
	 * Submenu containing this item.
	 */
	submenu			:	Submenu;

	/**
	 * Submenu Item name. Can be null if idFood is defined
	 */
	name			:	string | null;

	/**
	 * Submenu Item price. Can be null or equal to 0 if it's not an additional item
	 */
	price			:	number | null;
	
	/**
	 * Food Mirror. This is defined if this item is a reflect of a food
	 */
	food			:	Food | null;
}


export interface ICreateSubmenuItemInput {

	idSubmenu			:	number;

	name?				:	string | null;

	price?				:	number | null

	idFood?			:	number | null;
}

export interface IUpdateSubmenuItemInput {

	_id				:	number;

	idSubmenu?		:	number | null;

	name?			:	string | null;

	price?			:	number | null

	idFood?			:	number | null;
}