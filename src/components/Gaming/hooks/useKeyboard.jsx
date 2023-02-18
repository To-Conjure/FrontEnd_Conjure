import { useCallback, useEffect, useState } from "react"

function actionKeys(key){
    const keyActionList = {
        keyW: "goForward",
        keyA: "goLeft",
        keyS: "goBackward",
        keyD: "goRight",
        Space: "jump",
        Digit1: "grass"
    }
    return keyActionList[key]
}

export const useKeyboard = () => {
	const [action, setAction] = useState({
		goForward: false,
		goBackward: false,
		goLeft: false,
		goRight: false,
		grass: false,
	})

	const handleKeyDown = useCallback((e) => {
		const action = actionKeys(e.code)
		if (action) {
			setAction((prev) => {
				return ({
					...prev,
					[action]: true
				})
			})
		}
	}, [])

	const handleKeyUp = useCallback((e) => {
        // console.log(e)
		const action = actionKeys(e.code)
		if (action) {
			setAction((prev) => {
				return ({
					...prev,
					[action]: false
				})
			})
		}
	}, [])

	useEffect(() => {
        //track player events
		document.addEventListener('keydown', handleKeyDown)
		document.addEventListener('keyup', handleKeyUp)
		return () => {
            //then after remove to prevent endless actions
			document.removeEventListener('keydown', handleKeyDown)
			document.removeEventListener('keyup', handleKeyUp)
		}
	}, [handleKeyDown, handleKeyUp])

	return action
}