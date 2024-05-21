import { TfiAlignJustify } from 'react-icons/tfi'
import { AiFillCopyrightCircle } from 'react-icons/ai'
import { TfiUser } from 'react-icons/tfi'
import { AiOutlineCarryOut } from 'react-icons/ai'
import {
    HiOutlineViewGrid,
    HiOutlineCube,
    HiOutlineShoppingCart,
    HiOutlineUsers,
    HiOutlineDocumentText,
    HiOutlineAnnotation,
    HiOutlineQuestionMarkCircle,
    HiOutlineCog
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
        key: 'dashboard',
        label: 'Dashboard',
        path: '/layout',
        icon: <TfiAlignJustify />
    },
    {
        key: 'Student_Master',
        label: 'Student Master',
        path: '/layout/Student_Master',
        icon: <HiOutlineUsers />
    },
    {
        key: 'Course_Master',
        label: 'Course Master',
        path: '/layout/Course_Master',
        icon: <AiFillCopyrightCircle />
    },
    {
        key: 'Assigned_Course',
        label: 'Assigned Course',
        path: '/layout/Assigned_Course',
        icon: <AiOutlineCarryOut />
    },
    {
        key: 'Course_Registration',
        label: 'Course Registration',
        path: '/layout/Course_Registration',
        icon: <HiOutlineAnnotation />
    },
    {
        key: 'Honours_Minors_Registration',
        label: 'Honours Minors Registration',
        path: '/layout/Honours_Minors_Registration',
        icon: <HiOutlineAnnotation />
    },
    {
        key: 'Faculty_Master',
        label: 'Faculty Master',
        path: '/layout/Faculty_Master',
        icon: <TfiUser />
    }
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = []
