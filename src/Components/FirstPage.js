/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'

const FirstPage = () => {
  return (
          <div className="flex flex-row justify-center box-sizing-border">
            <div className="bg-[#FFFFFF] flex flex-col items-center p-[18px_16px_9px_16px] h-[fit-content] grow box-sizing-border">
              <div className="m-[0_8.6px_71px_8.6px] flex flex-row self-end w-[fit-content] box-sizing-border">
                <span className="m-[0_12.8px_0_0] break-words font-['Roboto'] font-[var(--body-161,400)] text-[16px] text-[var(--main-color-1,#F54749)]">
                  Skip
                </span>
                <div className="m-[4.3px_0_4.3px_0] flex flex-row justify-center w-[5.8px] h-[10.4px] box-sizing-border">
                  {/* <img className="w-[5.8px] h-[10.4px]" /> */}
                </div>
              </div>
              <div className="m-[0_1px_99px_0] flex flex-row justify-center w-[321px] h-[315px] box-sizing-border">
                <img className="w-[321px] h-[315px]" src='Group.svg' alt='Description of the image'/>
              </div>
              <div className="m-[0_0_163px_0] flex flex-col items-center w-[fit-content] box-sizing-border">
                <div className="m-[0_0_24px_0] inline-block break-words font-['Roboto'] font-[var(--h-21,600)] text-[22px] text-[var(--main-color,#FFA500)]">
                  Tasks=Coins
                </div>
                <div className="m-[0_0_24px_0] inline-block break-words font-['Roboto'] font-normal text-[16px] leading-[1.5] text-[var(--text-color-21,#80869A)]">
                  Complete Simple Tasks to earn Coins
                </div>
                <div className="flex flex-row gap-[0_15px] w-[60px] box-sizing-border">
                  <div className="rounded-[5px] bg-[var(--text-color-21,#80869A)] w-[10px] h-[10px]">
                  </div>
                  <div className="rounded-[5px] w-[10px] h-[10px]">
                  </div>
                  <div className="rounded-[5px] w-[10px] h-[10px]">
                  </div>
                </div>
              </div>
              <div className="rounded-[50px] bg-[var(--main-color,#FFA500)] m-[0_0_23px_0] flex flex-row justify-center p-[20px_0_20px_0] w-[100%] box-sizing-border">
                <span className="break-words font-['Roboto'] font-semibold text-[14px] uppercase text-[#FFFFFF]">
                  Next
                </span>
              </div>
              <div className="flex flex-row justify-center w-[156px] h-[5px] box-sizing-border">
                <div className="rounded-[50px] bg-[var(--text-color-11,#232323)] w-[156px] h-[5px]">
                </div>
              </div>
            </div>
          </div>
    )
}

export default FirstPage