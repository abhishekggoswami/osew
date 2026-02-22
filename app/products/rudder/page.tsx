import { Metadata } from 'next'
import RudderClient from './rudder-client'

export const metadata: Metadata = {
  title: 'Rudder Systems | OSEW',
  description: 'Custom fabricated and cast rudder systems for precise directional control. Steel and bronze rudders engineered to specification.',
}

export default function RudderPage() {
  return <RudderClient />
}
