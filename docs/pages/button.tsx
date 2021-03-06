import * as React from 'react';

import DocumentBuilder from '@components/document-builder';
import SEO from '@components/seo';
import { twFile } from '@utils/tw';

const buttonPropTypes = [
  {
    property: 'color',
    type: ['string'],
    default: '',
    values: [],
    description: 'Set the button color',
  },
  {
    property: 'size',
    type: ['xs', 'sm', 'md', 'lg', 'xl'],
    default: 'md',
    values: ['xs', 'sm', 'md', 'lg', 'xl'],
    description: 'Size of the button',
  },
  {
    property: 'variant',
    type: ['link', 'solid', 'outline', 'light', 'ghost'],
    default: 'outline',
    values: ['link', 'solid', 'outline', 'light', 'ghost'],
    description: 'Controls button appearance',
  },
  {
    property: 'loading',
    type: ['boolean'],
    default: false,
    values: [],
    description: 'Shows loading spinner',
  },
  {
    property: 'loadingText',
    type: ['string'],
    default: '',
    values: [],
    description: 'The label to show in the button when loading is true',
  },
  {
    property: 'type',
    type: ['button', 'reset', 'submit'],
    default: '',
    values: ['button', 'reset', 'submit'],
    description: 'Set the original html type of button',
  },
  {
    property: 'leftIcon',
    type: ['React.ReactElement'],
    default: '',
    values: [],
    description: 'Adds icon before button label',
  },
  {
    property: 'rightIcon',
    type: ['React.ReactElement'],
    default: '',
    values: [],
    description: 'Adds icon after button label',
  },
  {
    property: 'disabled',
    type: ['boolean'],
    default: false,
    values: [],
    description: 'Makes button disabled ',
  },
  {
    property: 'active',
    type: ['boolean'],
    default: false,
    values: [],
    description: 'Makes button active',
  },
];

const buttonGroupPropTypes = [
  {
    property: 'attached',
    type: ['boolean'],
    default: false,
    values: [],
    description: 'Button will be altered to look flushed together',
  },
  {
    property: 'disabled',
    type: ['boolean'],
    default: false,
    values: [],
    description: 'Set all wrapped button will be disabled',
  },
  {
    property: 'size',
    type: ['ButtonProps["size"]'],
    default: '',
    values: ['xs', 'sm', 'md', 'lg', 'xl'],
    description: 'Size of all wrapped button',
  },
  {
    property: 'color',
    type: ['string'],
    default: '',
    values: [],
    description: 'Set all wrapped button color',
  },
];

const propList = [
  {
    name: 'Button',
    value: 'button',
    propTypes: buttonPropTypes,
  },
  {
    name: 'Button.Group',
    value: 'button-group',
    propTypes: buttonGroupPropTypes,
  },
];

const demoList = [
  {
    name: 'Variants',
    files: [
      {
        name: 'button.tsx',
        code: `<div className="flex flex-wrap w-full p-8 space-x-2">
  <Button>Button</Button>
  <Button variant="solid">Button</Button>
  <Button variant="light">Button</Button>
  <Button variant="ghost">Button</Button>
  <Button variant="link">Button</Button>
</div>`,
        readOnly: false,
      },
    ],
    openEditor: true,
  },
];

const component = {
  name: 'Frame',
  importer: 'import { Button } from "@vechaiui/react"',
  demoList,
  propList,
};

export default function Button() {
  return (
    <>
      <SEO
        title="Tailwind CSS Button"
        description="Buttons trigger an action such as submitting a form or showing/hiding an interface component."
      />
      <DocumentBuilder component={component} />
    </>
  );
}
