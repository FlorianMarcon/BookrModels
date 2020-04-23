
export interface DateTimeSlot {
	_id:	number;

	start: Date;

	end: Date;

	idPlace	:	number;
}

export interface ICreateDateTimeSlot {
	start: Date;

	end: Date;
}

export interface IUpdateDateTimeSlot {
	_id:	number;

	start?: Date;

	end?: Date;

	idPlace?	:	number;
}

export interface QDateTimeSlotsOptions {
	
	start?:	Date;
	end?:	Date;
}
