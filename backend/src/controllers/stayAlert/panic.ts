import { Request, Response } from 'express'
import { createDistressSignal } from '../../helpers/distressSignalHelpers'

const sendDistressSignal = async (req: Request, res: Response) => {
  const { latitude, longitude, message, civilianId } = req.body
  try {
    const newDistressSignal = await createDistressSignal(latitude, longitude, message, civilianId)
    res.status(201).send(newDistressSignal)
  } catch (err) {
    res.status(400).send({ error: 'Unable to send distress signal' })
  }
}

export default sendDistressSignal
