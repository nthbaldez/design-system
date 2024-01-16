import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Heading, Text } from '@ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <>
        <Heading>Custom Title</Heading>
        <Text>Testando o elemento Box</Text>
      </>
    ),
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
