import Image from "next/image";

import { Icon } from "@/components/icons";

interface Props {
  imageSrc?: string;
  name: string;
}
export default function User({ imageSrc, name }: Props) {
  return (
    <div className='header-user'>
      <div className='header-user-image-wrapper'>{imageSrc ? <Image src={imageSrc} width={48} height={48} alt={name} /> : <Icon name='icon-user' />}</div>
      <p>{name}</p>
      <Icon name='icon-dropdown' width={20} height={20} />
    </div>
  );
}
