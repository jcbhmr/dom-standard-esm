/** https://dom.spec.whatwg.org/#callbackdef-eventlistener */
const EventListener = {
	[Symbol.hasInstance](thing: any) {
		return (
			typeof thing === "function" ||
			(typeof thing === "object" && "handleEvent" in thing && typeof thing.handleEvent === "function")
		)
	},
}

export default EventListener
