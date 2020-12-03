import {Place} from "./Place";
import { Food } from "./Food";
import { Menu } from "./Menu";

export interface FoodGroup {

	_id					:	number;
	
	name				:	string;

	index				:	number;

	isPublic			:	boolean;

	/** FIELD RESOLVERS */
	place				:	Place;

	menues				:	Array<Menu>

	foods				:	Array<Food>;
}

export interface ICreateFoodGroupInput {
	name				:	string;
}

export interface IUpdateFoodGroupInput {
	_id				:	number;

	name?				:	string;

	index?				:	number;

	isPublic?			:	boolean;
}