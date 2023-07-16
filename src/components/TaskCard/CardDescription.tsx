import { Disclosure } from '@headlessui/react';


type CardDescriptionProps = {
    taskDescription: string | undefined
}

export default function CardDescription({ taskDescription }: CardDescriptionProps) {
    const descriptionTitleClasses = 'font-semibold text-stone-600';
    const descriptionClasses = 'text-stone-500';
    return (
        <div className='mb-4'>
            {taskDescription ? <Disclosure>
                <Disclosure.Button className="py-2">
                    <span className={descriptionTitleClasses}>Description</span>
                </Disclosure.Button>
                <Disclosure.Panel className="text-gray-500">
                    <span className={descriptionClasses}>{taskDescription}</span>
                </Disclosure.Panel>
            </Disclosure> : null}
        </div>
    )
}