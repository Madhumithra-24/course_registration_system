import { Card, Typography } from '@material-tailwind/react'

const TABLE_HEAD = ['S NO','Faculty Id', 'Faculty Name','Email', 'Department',' Level','CourseId','AssignedCourse']

const TABLE_ROWS = [
    {
        sno:'1',
        facultyid: '16EC22',
        facultyname: 'Murugan',
        email:'murugan@bitsathy.ac.in',
        department: 'ECE',
        level: 'AP-I',
        courseid: '18EC602',
        AssignedCourse: 'Digital VLSI Systems',
    }, //like this modfiy all the balance
    {
        sno:'2',
        facultyid: '16EC90',
        facultyname: 'Jeevabharathi',
        email:'jeevabharathi@bitsathy.ac.in',
        department: 'ECE',
        level: 'AP-III',
        courseid: '18EC14',
        AssignedCourse: 'Asic Design',
    },
    {
        sno:'3',
        facultyid: '18IT80',
        facultyname: 'Sandhiya',
        email:'sandhiya@bitsathy.ac.in',
        department: 'IT',
        level: 'AP-II',
        courseid: '18IT603',
        AssignedCourse: 'Software Define Networks ',
    },
    {
        sno:'4',
        facultyid: '18CS70',
        facultyname: 'Arun',
        email:'arun@bitsathy.ac.in',
        department: 'CSE',
        level: 'AP-III',
        courseid: '18CS14',
        AssignedCourse: 'XML Web',
    },
    {
        sno:'5',
        facultyid: '17IT45',
        facultyname: 'Saranya',
        email:'saranya@bitsathy.ac.in',
        department: 'IT',
        level: 'AP-I',
        courseid: '18IT601',
        AssignedCourse: 'Information Coding Technique',
    },
    {
        sno:'6',
        facultyid: '18EC87',
        facultyname: 'Karthikeyan',
        email:'karthikeyan@bitsathy.ac.in',
        department: 'ECE',
        level: 'AP-II',
        courseid: '18EC007',
        AssignedCourse: 'Machine Learning',
    },
    {
        sno:'7',
        facultyid: '19EC94',
        facultyname: 'Sabari',
        email:'sabari@bitsathy.ac.in',
        department: 'ECE',
        level: 'AP-III',
        courseid: '18EC009',
        AssignedCourse: 'Multimedia Compression',
    }
]

function Faculty_Master() {
    
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
                    {TABLE_ROWS.map(({ sno,facultyid, facultyname, email,department, level,courseid, AssignedCourse }, index) => {
                        const isLast = index === TABLE_ROWS.length - 1
                        const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50'

                        return (
                            <tr key={facultyid}>
                                 <td className={classes}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {sno}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {facultyid}
                                    </Typography>
                                </td>
                                <td className={`${classes} bg-blue-gray-50/50`}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {facultyname}
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
                                        {level}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {courseid}
                                    </Typography>
                                </td>
                                <td className={classes}>
                                    <Typography variant="small" color="blue-gray" className="font-normal">
                                        {AssignedCourse}
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
export default Faculty_Master
