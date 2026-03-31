import { useState } from 'react';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Badge } from '../../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '../../components/ui/dropdown-menu';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
} from '../../components/ui/alert-dialog';
import { currentUser, accountSettings } from '../../lib/profile-data';
import {
    Mail, Phone, MapPin, Clock, Copy, Edit2, Save, X,
    Bell, Shield, LogOut, MoreVertical
} from 'lucide-react';

export default function ProfilePage() {
    const [isEditing, setIsEditing] = useState(false);
    const [showLogoutDialog, setShowLogoutDialog] = useState(false);
    const [editedName, setEditedName] = useState(currentUser.name);
    const [editedBio, setEditedBio] = useState(currentUser.bio);

    const handleSave = () => {
        setIsEditing(false);
    };

    const copyEmail = () => {
        navigator.clipboard.writeText(currentUser.email);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
            <div className="max-w-5xl mx-auto p-4 sm:p-6 space-y-8">

                {/* Header */}
                <div className="relative">
                    <div className="absolute inset-0 h-32 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-lg" />

                    <div className="relative flex flex-col sm:flex-row justify-between gap-6">

                        <div className="flex gap-6">
                            <img
                                src={currentUser.avatar}
                                className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl object-cover border-4 border-background shadow-lg"
                            />

                            <div>
                                {isEditing ? (
                                    <>
                                        <Input value={editedName} onChange={(e) => setEditedName(e.target.value)} />
                                        <Input value={currentUser.title} disabled />
                                    </>
                                ) : (
                                    <>
                                        <h1 className="text-3xl font-bold">{editedName}</h1>
                                        <p className="text-primary">{currentUser.title}</p>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="flex gap-2">
                            {isEditing ? (
                                <>
                                    <Button onClick={handleSave}>
                                        <Save className="w-4 h-4 mr-2" />
                                        Save
                                    </Button>
                                    <Button variant="outline" onClick={() => setIsEditing(false)}>
                                        <X className="w-4 h-4 mr-2" />
                                        Cancel
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Button variant="outline" onClick={() => setIsEditing(true)}>
                                        <Edit2 className="w-4 h-4 mr-2" />
                                        Edit
                                    </Button>

                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="outline">
                                                <MoreVertical className="w-4 h-4" />
                                            </Button>
                                        </DropdownMenuTrigger>

                                        <DropdownMenuContent>
                                            <DropdownMenuItem onClick={() => setShowLogoutDialog(true)}>
                                                <LogOut className="w-4 h-4 mr-2" />
                                                Logout
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </>
                            )}
                        </div>

                    </div>
                </div>

                {/* Tabs */}
                <Tabs defaultValue="overview">

                    <TabsList className="grid grid-cols-3 max-w-md">
                        <TabsTrigger value="overview">Overview</TabsTrigger>
                        <TabsTrigger value="settings">Settings</TabsTrigger>
                        <TabsTrigger value="billing">Billing</TabsTrigger>
                    </TabsList>

                    <TabsContent value="overview" className="space-y-6">

                        <Card className="p-6">
                            <h2 className="font-bold mb-4">Contact</h2>

                            <div className="space-y-3">
                                <div className="flex gap-3">
                                    <Mail /> {currentUser.email}
                                </div>
                                <div className="flex gap-3">
                                    <Phone /> {currentUser.phone}
                                </div>
                                <div className="flex gap-3">
                                    <MapPin /> {currentUser.location}
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6">
                            <h2 className="font-bold mb-2">About</h2>
                            {isEditing ? (
                                <textarea
                                    value={editedBio}
                                    onChange={(e) => setEditedBio(e.target.value)}
                                    className="w-full border p-2 rounded"
                                />
                            ) : (
                                <p>{editedBio}</p>
                            )}
                        </Card>

                    </TabsContent>

                </Tabs>

                {/* Logout Dialog */}
                <AlertDialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog}>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Logout</AlertDialogTitle>
                            <AlertDialogDescription>
                                Are you sure you want to logout?
                            </AlertDialogDescription>
                        </AlertDialogHeader>

                        <div className="flex justify-end gap-2">
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction>Logout</AlertDialogAction>
                        </div>
                    </AlertDialogContent>
                </AlertDialog>

            </div>
        </div>
    );
}