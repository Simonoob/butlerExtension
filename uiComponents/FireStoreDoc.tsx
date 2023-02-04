import { useFirestoreDoc } from "~firebase/use-firestore-doc"

const FireStoreDoc = () => {
  const { data: enterpriseData, setData } = useFirestoreDoc<{
    serial: string
  }>("starships/enterprise")
  return (
    <div>
      <h2>Ship serial number:</h2>
      <input
        value={enterpriseData?.serial || ""}
        onChange={(e) =>
          setData({
            serial: e.target.value
          })
        }
      />
    </div>
  )
}

export default FireStoreDoc
