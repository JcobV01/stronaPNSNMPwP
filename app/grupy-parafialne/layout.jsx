import GroupsNav from '@components/groups/GroupsNav'

const layout = ({ children }) => {
    return (
        <section className='flex flex-col items-center'>
            <GroupsNav/>
            {children}
        </section>
    )
}

export default layout