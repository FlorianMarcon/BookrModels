import Place from "./Place";

export default interface Event {

	_id					:	string;
	
	guardPageUrl		:	string;

	contentUrl			:	string;

	idPlaces			:	Array<string>;

	startDate			:	Date;

	endDate				:	Date;

	places?				:	Array<Place>;
}
