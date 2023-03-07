export enum FetchStatus {
	Done,
	Fetching,
	Idle,
	Error
}

export type FetchState =
	| {
			status: FetchStatus.Done;
	  }
	| {
			status: FetchStatus.Fetching;
	  }
	| {
			status: FetchStatus.Idle;
	  }
	| {
			status: FetchStatus.Error;
			data: Response;
	  };
