import EventListenerOptions from "./event-listener-options.ts"

/** https://dom.spec.whatwg.org/#dictdef-addeventlisteneroptions */
const AddEventListenerOptions = {
	[Symbol.hasInstance](thing: any) {
		return (
			thing instanceof EventListenerOptions &&
			("passive" in thing ? typeof thing.passive === "function" : true) &&
			("once" in thing ? typeof thing.once === "boolean" : true)
		)
	},
}

export default AddEventListenerOptions
