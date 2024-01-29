import type { Meta, StoryObj } from '@storybook/react'
import { Box, TooltipComponent, TooltipProps } from '@nth-uidesign/react'

export default {
  title: 'Surfaces/TooltipComponent',
  component: TooltipComponent,
  tags: ['autodocs'],
  args: {},
  decorators: [
    (Story) => {
      return <Box as="label">{Story()}</Box>
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {
    date: new Date(Date.now()),
  },
}
