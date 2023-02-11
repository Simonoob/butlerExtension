import React from "react"

import { useFirebase } from "~firebase/hook"
import { useFirestoreDoc } from "~firebase/use-firestore-doc"
import type { UserInfoDb } from "~firebase/utils"

const DisplayNameSetting = () => {
  const { user } = useFirebase()

  const { data: userData, setData: setUserData } = useFirestoreDoc<UserInfoDb>(
    `users/${user?.uid}`
  )

  return (
    <>
      <p>Display Name: </p>
      <input
        type="text"
        onChange={(e) =>
          setUserData({
            ...userData,
            displayName: e.target.value
          })
        }
        name="displayName"
      />
    </>
  )
}

export default DisplayNameSetting
