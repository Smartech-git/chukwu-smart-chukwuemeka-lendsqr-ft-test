"use client";

import { UserDetailsSection } from "@/requests/get-user";

interface Props {
  generalDetails: UserDetailsSection[];
}
export default function GeneralDetails({ generalDetails }: Props) {
  return (
    <div className='user-details-general-details'>
      {generalDetails.map((section, index) => (
        <div key={index} className='user-details-general-details-block'>
          <h1>{section.title}</h1>
          <div className='user-details-block-content'>
            {section.blocks.map((block, blockIndex) => (
              <div key={blockIndex} className='user-details-block-item'>
                <h1>{block.title}</h1>
                <p>{block.value}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
