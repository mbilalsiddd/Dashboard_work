import React from 'react'
import { EigthTable, ElevenTable, FifteenTable, FifthTable, FirstTable, FourteenTable, FourthTable, NineTable, SecondTable, SevenTable, SeventeenTable, SixTable, SixteenTable, TenTable, ThirdTable, ThirteenTable, TwelveTable } from '../table'

const Schedule = () => {
  return (
    <>
      <div className="r">
        <h3 style={{ textAlign: "center" }}> ORTHOPEDIC</h3>
        <FirstTable />
        <h3 style={{ textAlign: "center", marginTop: "40px" }}>PHYSIOYHERAPIST</h3>
        <SecondTable />
        <h3 style={{ textAlign: "center", marginTop: "40px" }}>GENERAL PHYSICIAN</h3>
        <ThirdTable />
        <h3 style={{ textAlign: "center", marginTop: "40px" }}>GENERAL SURGEON</h3>
        <FourthTable />
        <h3 style={{ textAlign: "center", marginTop: "40px" }}>E.N.T</h3>
        <FifthTable />
        <h3 style={{ textAlign: "center", marginTop: "40px" }}>PEADS  CONSULTANT</h3>
        <SixTable />
        <h3 style={{ textAlign: "center", marginTop: "40px" }}>CYNE</h3>
        <SevenTable />
        <h3 style={{ textAlign: "center", marginTop: "40px" }}>SONOLOGIST</h3>
        <EigthTable />
        <h3 style={{ textAlign: "center", marginTop: "40px" }}>DIABETOLOGIST</h3>
        <NineTable />
        <h3 style={{ textAlign: "center", marginTop: "40px" }}>NEURO PHYSICIAN</h3>
        <TenTable />
        <h3 style={{ textAlign: "center", marginTop: "40px" }}>NEURO SURGEON</h3>
        <ElevenTable />
        <h3 style={{ textAlign: "center", marginTop: "40px" }}>SKIN SPECIALISt</h3>
        <TwelveTable />
        <h3 style={{ textAlign: "center", marginTop: "40px" }}>GASTROENOLOGIST</h3>
        <ThirteenTable />
        <h3 style={{ textAlign: "center", marginTop: "40px" }}>UROLOGIST</h3>
        <FourteenTable />
        <h3 style={{ textAlign: "center", marginTop: "40px" }}>DENTIST</h3>
        <FifteenTable />
        <h3 style={{ textAlign: "center", marginTop: "40px" }}>VACCINATION</h3>
        <SixteenTable />
        <h3 style={{ textAlign: "center", marginTop: "40px" }}>ORAL & MAXILLOFACIAL SURGEON</h3>
        <SeventeenTable />
      </div>
    </>
  )
}

export default Schedule