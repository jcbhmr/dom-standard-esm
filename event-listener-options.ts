/** https://dom.spec.whatwg.org/#dictdef-eventlisteneroptions */
const EventListenerOptions = {
	[Symbol.hasInstance](thing: any) {
		return (
			(typeof thing === "object" || typeof thing === "function") &&
			("capture" in thing ? typeof thing.capture === "boolean" : true)
		)
	},
}

export default EventListenerOptions
