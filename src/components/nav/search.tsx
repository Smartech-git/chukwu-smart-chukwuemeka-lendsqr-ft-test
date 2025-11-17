import Button from "@/components/ui/button";
import Input from "@/components/ui/input";

import { Icon } from "../icons";

export default function Search() {
  return (
    <div className='header-search'>
      <Input animatePlaceholder={false} placeholder='Search for anything' size='md' />
      <Button size='md' className=' '>
        <Icon width={16} height={16} name='icon-search' />
      </Button>
    </div>
  );
}
