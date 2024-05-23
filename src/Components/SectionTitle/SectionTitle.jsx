

export default function SectionTitle({heading,subHeading}) {
  return (
  <>
        <div className="mx-auto w-fit my-8" >
            <h3 className="text-yellow-600 mb-2 " >---{subHeading}---</h3>
            <h4 className="text-3xl uppercase border-y-2 border-black/75  py-4" >{heading}</h4>
        </div>
  </>
  )
}
