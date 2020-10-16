import {Place} from "./Place";
import { Food } from "./Food";
import { Menu } from "./Menu";

export interface FoodGroup {

	_id					:	number;
	
	name				:	string;

	place				:	Place;

	foods				:	Array<Food>;

	index				:	number;

	menues				:	Array<Menu>
}

export interface ICreateFoodGroupInput {
	name				:	string;
}

export interface IUpdateFoodGroupInput {
	_id				:	number;

	name?				:	string;

	index?				:	number;
}