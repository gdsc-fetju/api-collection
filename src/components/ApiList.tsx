import { IApiContent } from "@/interfaces/api-content.interface";

interface Props {
  apiList: IApiContent[];
}

function ApiList({ apiList }: Props) {

  if (!apiList.length) {
    return <p>No APIs found</p>
  }
  return (
    <>
      {apiList.map((api, index) => (
        // <ApiCard key={index} api={api} />
        <>
          {JSON.stringify(api)}
          < br />
        </>
      ))}
    </>
  )
}

export default ApiList;