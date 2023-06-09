import { Request, Response } from 'express'
import { createReport } from '../../helpers/reportHelpers'

const sendReport = async (req: Request, res: Response) => {
  const { reportType, message, civilianId } = req.body

  try {
    const newReport = await createReport(reportType, message, civilianId)
    res.status(201).send(newReport)
  } catch (err) {
    res.status(400).send({ error: 'Unable to send report' })
  }
}

export default sendReport
