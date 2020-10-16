import { FoodGroup } from "./FoodGroup";
import { Place } from "./Place";
import { Submenu, ICreateSubmenuInput } from "./Submenu";

export interface Menu {

	_id				:	number;

	name			:	string;

	description		:	string;

	price			:	number;

	imageUrl		:	string;

	indexFoodGroup	:	number;

	/**
	 * FIELD RESOLVERS
	 */
	foodGroup		:	FoodGroup;

	place			:	Place;

	submenues		:	Array<Submenu>;
}

export interface ICreateMenuInput extends Partial<Menu> {
	name		:	string;

	description?		:	string;

	price				:	number;

	idFoodGroup?	:	number | null;

	createSubmenuesList?	:	Array<ICreateSubmenuInput>;
}

export interface IUpdateMenuInput extends Partial<Menu> {
	_id					:	number;

	name?				:	string;

	description?		:	string;

	idFoodGroup?	:	number | null;

	price?				:	number;
}