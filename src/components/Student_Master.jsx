import { Card, Typography } from '@material-tailwind/react'
import { useEffect, useState } from 'react'

const TABLE_HEAD = ['S NO', 'RollNo', 'Name', 'Email', 'Department', 'Batch', 'Semester', 'Year', 'CGPA']

function Student_Master() {
    const [tablerows, settablerows] = useState([])
    useEffect(() => {
        fetchOverallStudentData()
    }, [])

    async function fetchOverallStudentData() {
        try {
            const response = await fetch('http://localhost:5555/getstudent')
            const data = await response.json()
            const mappedData = data.map((student, index) => ({
                sno: index + 1,
                rollno: student.rollno,
                name: student.name,
                email: student.email,
                department: student.department,
                batch: student.batch,
                semester: student.semester,
                year: student.year,
                sgpa: student.sgpa
            }))
            settablerows(mappedData)
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }

    return (
        <Card className="h-full w-full overflow-scroll">
            <table className="w-full min-w-max table-auto text-left">
                <thead>
                    <tr>
                        {TABLE_HEAD.map((head) => (
                            <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                                <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal leading-none opacity-70"
                                >
                                    {head}
                                </Typography>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {tablerows.map(({ sno, rollno, name, email, department, batch, semester, year, sgpa }, index) => {
                        const isLast = index === tablerows.length - 1
                        const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50'

                        return (
                            <tr key={name}>
                                <td className={classes}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {sno}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {rollno}
                                    </Typography>
                                </td>
                                <td className={`${classes} bg-blue-gray-50/50`}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {name}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {email}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {department}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {batch}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {semester}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {year}
                                    </Typography>
                                </td>

                                <td className={classes}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {sgpa}
                                    </Typography>
                                </td>
                                <td className={`${classes} bg-blue-gray-50/50`}>
                                    <Typography
                                        as="a"
                                        href="#"
                                        variant="small"
                                        color="blue-gray"
                                        className="font-medium"
                                    ></Typography>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Card>
    )
}
export default Student_Master
