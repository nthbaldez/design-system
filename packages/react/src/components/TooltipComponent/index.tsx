import { ComponentProps } from 'react'
import { Tooltip } from '@chakra-ui/react'
import { CalendarDateButton } from './styles'

interface TooltipComponentProps {
  date: Date
}

export function TooltipComponent({ date }: TooltipComponentProps) {
  const getNowDate = new Date(date)
  const dateFormatted = new Intl.DateTimeFormat('pt-BR').format(getNowDate)
  return (
    <Tooltip
      label={dateFormatted}
      placement="top"
      bg="#121214"
      color="white"
      paddingTop={12}
      paddingBottom={12}
      paddingLeft={16}
      paddingRight={16}
      borderRadius={5}
      fontFamily="Roboto"
      hasArrow
    >
      <CalendarDateButton>{getNowDate.getDate()}</CalendarDateButton>
    </Tooltip>
  )
}

export type TooltipProps = ComponentProps<typeof TooltipComponent>

TooltipComponent.displayName = 'Tooltip'
