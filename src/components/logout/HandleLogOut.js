export const handleLogOut = (e) => {
    e && e.preventDefault();
    setLoading(true);
    localStorage.removeItem("accessToken");
    setLoading(false);
    navigate("/login");
};