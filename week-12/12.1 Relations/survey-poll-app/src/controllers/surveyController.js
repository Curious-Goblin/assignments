const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

class SurveyController {
    async getAllSurveys(req, res) {
        try {
            const surveys = await prisma.survey.findMany()
            return res.status(200).json(surveys)
        }
        catch (error) {
            return res.status(500).json({ message: error.message })
        }
    }

    async getAllSurveysById(req, res) {
        try {
            const id = parseInt(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json(
                    {
                        message: "Invalid survey ID",
                        id:id
                    });
            }
            const survey = await prisma.survey.findUnique({
                where: { id }
            });
            if (!survey) {
                return res.status(404).json({ message: "No surveys were found with this ID" });
            }
            return res.status(200).json(survey);
        }
        catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }


    async createSurvey(req, res) {
        try {
            const body = req.body
            const survey = await prisma.survey.create({
                data: body
            })
            res.status(200).json(survey)
        }
        catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    async updateSurvey(req, res) {
        try {
            const body = req.body
            const survey = await prisma.survey.update({
                where: { id: parseInt(req.params.id) },
                data: {
                    title: body.title
                }
            })
            res.status(200).json(survey)
        }
        catch (error) {
            res.status(500).json({ message: error.message })
        }
    }

    async deleteSurvey(req, res) {
        try {
            await prisma.survey.delete({
                where: { id: parseInt(req.params.id) }
            })
            res.status(200).json({ msg: "survey deleted successfully" })
        }
        catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
}

module.exports = new SurveyController();