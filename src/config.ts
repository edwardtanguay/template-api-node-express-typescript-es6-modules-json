import { IApiStatus } from './interfaces.js';

export const getPort = () => {
	return 4206;
}

export const apiStatus = (): IApiStatus => {
	return {
		status: "live",
		whenLiveAgainDateTime: "2024-01-15 11:00:00"
	}
}