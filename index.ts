// Public surface. Everything reachable from here is API you have to keep;
// anything else under `src/` is internal and free to change.
//
// The `.js` extension is required: under `nodenext` resolution the specifier
// must match the emitted file, not the `.ts` source.

export { ApiClient } from "./src/client.js";
export type {
	ApiClientOptions,
	RequestOptions,
	Transport,
} from "./src/client.js";

export type {
	HttpMethod,
	Operation,
	QueryParams,
	QueryValue,
	RequestBody,
	RequestHeaders,
} from "./src/operation.js";

export { readJson } from "./src/decode.js";

// Query serialisations `buildUrl` does not produce on its own, for the
// endpoints whose documents ask for them.
export { deepObject, joined } from "./src/query.js";

export {
	ApiError,
	DecodeError,
	HttpError,
	TransportError,
} from "./src/errors.js";

// Example resource. Delete these two exports along with src/resources/example.ts.
export {
	createExample,
	getExample,
	listExamples,
} from "./src/resources/example.js";
export type {
	Example,
	ExampleListResponse,
	ListExamplesQuery,
	NewExample,
} from "./src/resources/example.js";

// Everything between the markers below belongs to the generator. Edits inside
// them are overwritten on the next run; everything above is yours.
// dung-beetle:start generated exports
export {
	createActivity,
	getActivity,
	listActivityComments,
	listActivityKudos,
	listActivityLaps,
	listActivityStreams,
	listActivityZones,
	replaceActivity,
} from "./src/resources/activities.js";

export type {
	DetailedActivity,
	GetActivityQuery,
	ListActivityCommentsQuery,
	ListActivityCommentsResponse,
	ListActivityKudosQuery,
	ListActivityKudosResponse,
	ListActivityLapsResponse,
	ListActivityStreamsQuery,
	ListActivityZonesResponse,
	StreamSet,
	UpdatableActivity,
} from "./src/resources/activities.js";

export {
	getAthlete,
	listAthleteActivities,
	listAthleteClubs,
	listAthleteZones,
	replaceAthlete,
} from "./src/resources/athlete.js";

export type {
	DetailedAthlete,
	ListAthleteActivitiesQuery,
	ListAthleteActivitiesResponse,
	ListAthleteClubsQuery,
	ListAthleteClubsResponse,
	Zones,
} from "./src/resources/athlete.js";

export {
	listAthleteRoutes,
	listAthleteStats,
} from "./src/resources/athletes.js";

export type {
	ActivityStats,
	ListAthleteRoutesQuery,
	ListAthleteRoutesResponse,
} from "./src/resources/athletes.js";

export {
	getClub,
} from "./src/resources/clubs.js";

export type {
	DetailedClub,
} from "./src/resources/clubs.js";

export {
	getGear,
} from "./src/resources/gear.js";

export type {
	DetailedGear,
} from "./src/resources/gear.js";

export {
	getRoute,
	getRouteExportGpx,
	getRouteExportTcx,
	listRouteStreams,
} from "./src/resources/routes.js";

export type {
	GetRouteExportGpxResponse,
	GetRouteExportTcxResponse,
	Route,
} from "./src/resources/routes.js";

export {
	getSegmentEffort,
	listSegmentEffortStreams,
	listSegmentEfforts,
} from "./src/resources/segment-efforts.js";

export type {
	DetailedSegmentEffort,
	ListSegmentEffortStreamsQuery,
	ListSegmentEffortsQuery,
	ListSegmentEffortsResponse,
} from "./src/resources/segment-efforts.js";

export {
	getSegment,
	getSegmentExplore,
	getSegmentStarred,
	listSegmentStreams,
	replaceSegmentStarred,
} from "./src/resources/segments.js";

export type {
	DetailedSegment,
	ExplorerResponse,
	GetSegmentExploreQuery,
	GetSegmentStarredQuery,
	GetSegmentStarredResponse,
	ListSegmentStreamsQuery,
} from "./src/resources/segments.js";

export {
	createUpload,
	getUpload,
} from "./src/resources/uploads.js";

export type {
	Upload,
} from "./src/resources/uploads.js";
// dung-beetle:end
