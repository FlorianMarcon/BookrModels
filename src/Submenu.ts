import {Place} from "./Place";
import {Food} from "./Food";
import { Menu } from "./Menu";
import { SubmenuItem } from "./SubmenuItem";

export interface Submenu {

	_id				:	number;

	name			:	string;

	quantity		:	number;
	minQuantity		:	number;
	maxQuantity		:	number;
	chooseOnlyDifferentItems:	boolean;

	place			:	Place;

	foods			:	Array<Food>;
	items?			:	Array<SubmenuItem>;
	menu?			:	Menu;
}


export interface ICreateSubmenuInput  extends Partial<Submenu> {

	name				:	string;

	quantity?			:	number;
	minQuantity?		:	number;
	maxQuantity?		:	number;
	chooseOnlyDifferentItems?:	boolean;

	idFoods?			:	number[];

	idMenu				:	number | null;
}

export interface IUpdateSubmenuInput  extends Partial<Submenu> {

	_id					:	number;
	
	name?				:	string;

	quantity?			:	number;
	minQuantity?		:	number;
	maxQuantity?		:	number;
	chooseOnlyDifferentItems?:	boolean;

	idFoods?			:	number[];
}