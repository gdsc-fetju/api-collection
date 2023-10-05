import { IApiContent } from "@/interfaces/api-content.interface";
import ApiCard from "./ApiCard";

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
        <ApiCard key={index} api={api} />
      ))}
    </>
  )
}

export default ApiList;