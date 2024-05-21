import { Card, Typography } from '@material-tailwind/react'

const TABLE_HEAD = ['S NO','Course Id', 'Course Name', 'Department', 'Semester', ]

const TABLE_ROWS = [
    {
      sno:'1',
      courseid: '18CS14',
        coursename: 'XML web',
        department: 'CSE',
        semester: ' 6'
    }, //like this modfiy all the balance
    {
      sno:'2',
      courseid: '18IT601',
      coursename: 'Information Coding Technique',
      department: 'IT',
      semester: '6'
  },
  {
    sno:'3',
    courseid: '18EC009',
    coursename: 'Multimedia Compression',
    department: 'ECE',
    semester: ' 6'
},
{
  sno:'4',
  courseid: '18IT603',
  coursename: 'Software Define Networks',
  department: 'IT',
  semester: ' 6'
},
{
  sno:'5',
  courseid: '18EC602',
  coursename: 'Digital VLSI Systems',
  department: 'ECE',
  semester: ' 6'
},
{
  sno:'6',
  courseid: '18EC14',
  coursename: 'Asic Design',
  department: 'ECE',
  semester: ' 6'
},
{
  sno:'7',
  courseid: '18EC601',
  coursename: 'Human Values and Ethics',
  department: 'ECE',
  semester: '6'
},
]

function Coursemaster() {
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
                    {TABLE_ROWS.map(({ sno,courseid, coursename, department, semester }, index) => {
                        const isLast = index === TABLE_ROWS.length - 1
                        const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50'

                        return (
                            <tr key={courseid}>
                                <td className={classes}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {sno}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {courseid}
                                    </Typography>
                                </td>
                                <td className={`${classes} bg-blue-gray-50/50`}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {coursename}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {department}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {semester}
                                    </Typography>
                                </td>

                                <td className={`${classes} bg-blue-gray-50/50`}>
                                    <Typography
                                        as="a"
                                        href="#"
                                        variant="small"
                                        color="blue-gray"
                                        className="font-medium"
                                    >
                                        
                                    </Typography>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </Card>
    )
}
export default Coursemaster
