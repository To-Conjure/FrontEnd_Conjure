import { useCallback, useEffect, useState } from "react"

function actionKeys(key){
    const keyActionList = {
        KeyW: "goForward",
        KeyA: "goLeft",
        KeyS: "goBackward",
        KeyD: "goRight",
        Space: "jump",
		ShiftLeft: "sprint",
        Digit1: "stone",
		Digit2: "grass"
    }
	// console.log(key)
    return keyActionList[key]
}

export const useKeyboard = () => {
	const [actions, setActions] = useState({
		goForward: false,
		goBackward: false,
		goLeft: false,
		goRight: false,
		sprint: false,
		grass: false,
	})

	const handleKeyDown = useCallback((e) => {
		console.log(e)
		const action = actionKeys(e.code)
		if (action) {
			setActions((prev) => {
				return ({
					...prev,
					[action]: true
				})
			})
		}
	}, [])

	const handleKeyUp = useCallback((e) => {
        console.log(e)
		const action = actionKeys(e.code)
		if (action) {
			setActions((prev) => {
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

	return actions
}