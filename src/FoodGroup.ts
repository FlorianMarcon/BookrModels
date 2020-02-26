import Place from "./Place";
import { Food } from "..";

export default interface FoodGroup {

	_id					:	string;
	
	name				:	string;

	place?				:	Place;

	foods?				:	Array<Food>;
}
