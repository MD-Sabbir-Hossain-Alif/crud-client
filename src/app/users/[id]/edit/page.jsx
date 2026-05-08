import { updateUser } from "@/app/lib/action";
import { getUserById } from "@/app/lib/data";
import EditUser from "@/components/EditUser";

const UserEditPage = async ({ params }) => {
    const { id } = await params;
    // console.log(id);
    const user = await getUserById(id);
    // console.log(user);
    return (
        <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-semibold py-5">User Edit Page</h2>
            <EditUser user={user} updateUser={updateUser}></EditUser>
        </div>
    );
};

export default UserEditPage;
